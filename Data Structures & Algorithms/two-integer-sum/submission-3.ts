class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // complemento => indice
        const complement = new Map<number, number>;
        let indices: number[] = [];
        
        for (const [i, n] of nums.entries()) {
            if(complement.has(n)) {
                indices.push(complement.get(n)); // indice do numero que somado a n da o target
                indices.push(i); // indice de n no vetor
                return indices
            }

            let complemento = target - n;

            complement.set(complemento, i);
        }
    }
}
