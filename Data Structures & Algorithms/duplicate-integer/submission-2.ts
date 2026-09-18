class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numeros = new Set<number>();
        
        if (!(nums.length > 0)) {
            return false;
        }

        for (const num of nums) {
            if(numeros.size == 0) {
                numeros.add(num)
            } else {
                if (numeros.has(num)) return true;
                numeros.add(num);
            }
        }
        return false
    }
}
