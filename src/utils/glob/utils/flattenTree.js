const isFunction = (tar) =>
  (Object.prototype.toString.call(tar) === '[object Function]');
const getRankIndex = (rank,rankIndex = {}) => {
  if (rankIndex[rank]) {
    rankIndex[rank].push(1);
    return rankIndex[rank].length - 1;
  } else {
    rankIndex[rank] = [];
    rankIndex[rank].push(1);
    return 0;
  }
}
/**
 * @param {rootNode} target
 * @param {object} options
 * @param {function|string} options.childrenKey
 * @param {Function} options.filter
 * @returns {Array}
 */
export function flattenTree (
  target,
  options = {},
  rank = 0,
  parents = [],
  result = [],
  rankIndex = {},
) {
  const { childrenKey,children,filter } = options;
  const childK = childrenKey || children || 'children';
  if (filter && filter(target)) {
    result.push({
      data: target,
      parents,
      rank,
      rankIndex: getRankIndex(rank,rankIndex),
    })
  } else {
    result.push({
      data: target,
      rank,
      parents,
      rankIndex: getRankIndex(rank,rankIndex)
    })
  }

  const childrenS = isFunction(childK) ? childK(target) : target[childK];
  if (Array.isArray(children) && children.length > 0) {
    childrenS.forEach(child => {
      flattenTree(child,options,rank + 1,[...parents,target],result,rankIndex)
    })
  } else {
    result[result.length - 1].lastRank = true;
  }
  return result;
}

/**
 * 获取具有最大节点数的rank
 * @param {*} rootNode
 * @param {*} options
 * @returns {array} [rank,rankNumber]
 */
export function getTreeRankWithMaxNode (rootNode,options) {
  const flattenArray = flattenTree(rootNode,options);
  const rankTotals = flattenArray.reduce((pre,curr) => {
    const rank = curr.rank;
    return {
      ...pre,
      [rank]: pre[rank] ? pre[rank] + 1 : 1,
    }
  },{});
  const entries = Object.entries(rankTotals);
  return entries.reduce((pre,curr) => {
    if (curr[1] >= pre[1]) {
      return curr
    } else {
      return pre
    }
  },[0,0])
}

/**
 * 统计tree每层的节点数；
 * @param {object} rootNode
 * @param {*} options
 * @returns {object} key:rank value:rankNumber
 */
export function getTreeRankNodesNumber (rootNode,options) {
  const flattenArray = flattenTree(rootNode,options);
  return flattenArray.reduce((pre,curr) => {
    const rank = curr.rank;
    return {
      ...pre,
      [rank]: pre[rank] ? pre[rank] + 1 : 1,
    }
  },{});
}
