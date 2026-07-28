class Solution {
    public boolean hasDuplicate(int[] nums) {
        HashSet<Integer> e = new HashSet<>();

        long n = nums.length;
        int c = 0;

        if(n > 0)
            e.add(nums[c++]);

        while(n-- > 1){
            if(e.contains(nums[c])) {
                return true;
            } else {
                e.add(nums[c]);
            }
            c++;
        }
        return false;
    }
}