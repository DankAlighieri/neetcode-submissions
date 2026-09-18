class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // complemento => indice
        const complement = new Map<number, number>;
        
        for (const [i, n] of nums.entries()) {
            let complemento = target - n;

            if(complement.has(n)) {
                return [complement.get(n), i]
            }
            complement.set(complemento, i);
        }
    }
}
