class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> compHash = new HashMap<>();
        int[] ret = new int[2]; 
        int len = nums.length;

        for(int i = 0; i < len; i++) {
            int comp = target - nums[i];
            if (compHash.containsKey(comp)) {
                ret[0] = compHash.get(comp);
                ret[1] = i;
                return ret;
            }

            compHash.put(nums[i], i);
        }
        return ret;
    }
}
