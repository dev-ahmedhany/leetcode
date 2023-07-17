# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        leafs1 = self.leafs(root1)
        leafs2 = self.leafs(root2)
        while True:
            try:
                val1 = next(leafs1)
                done1 = True
            except:
                done1 = False

            try:
                val2 = next(leafs2)
                done2 = True
            except:
                done2 = False

            if done1 and done2:
                if val1 != val2:
                    return False
            elif not done1 and not done2:
                return True
            else:
                return False


    def leafs(self, node):
        if not node.left and not node.right:
            yield node.val
        else:
            if node.left:
                yield from self.leafs(node.left)
            if node.right:
                yield from self.leafs(node.right)