class Solution {
    public boolean isAnagram(String s, String t) {
        HashMap<Character, Integer> c1 = new HashMap<>();
        HashMap<Character, Integer> c2 = new HashMap<>();

        Character c = ' ';

        int l1 = s.length();
        int l2 = t.length();

        if (l1 != l2) return false;

        for(int i = 0; i < l1; i++) {
            c = s.charAt(i);
            if(c1.containsKey(c)) {
                c1.put(c, c1.get(c) + 1);
            } else {
                c1.put(c, 1);
            }
        }

        for(int i = 0; i < l2; i++) {
            c = t.charAt(i);
            if(c2.containsKey(c)) {
                c2.put(c, c2.get(c) + 1);
            } else {
                c2.put(c, 1);
            }
        }

        return c1.equals(c2);
    }
}
