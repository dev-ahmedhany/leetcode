/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const leafIterator1 = new LeafIterator(root1);
        const leafIterator2 = new LeafIterator(root2);
        while (leafIterator1.hasNext() && leafIterator2.hasNext()) {
            if (leafIterator1.next() !== leafIterator2.next()) return false;
        }
        return !(leafIterator1.hasNext() || leafIterator2.hasNext());
};

class LeafIterator {
    constructor(root) {
        this.stack = [];
        while (root !== null) {
            this.stack.push(root);
            root = root.left;
        }
        this.answer = -1;
    }

    hasNext() {
        return this.answer !== null;
    }

    next() {
        while (this.stack.length > 0 && !this.isLeaf(this.stack[this.stack.length - 1])) {
            let node = this.stack.pop().right;
            while (node !== null) {
                this.stack.push(node);
                node = node.left;
            }
        }
        this.answer = this.stack.length === 0 ? null : this.stack.pop().val;
        return this.answer;
    }

    isLeaf(node) {
        return node !== null && node.left === null && node.right === null;
    }
}