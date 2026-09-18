class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const caracteres1 = new Map<string, number>;
        const caracteres2 = new Map<string, number>;;
        
        if (s.length != t.length) return false;

        console.log(s);
        for(const c of s){
            if(!caracteres1.has(c)) caracteres1.set(c, 1);
            else {
                let n = caracteres1.get(c) + 1;
                caracteres1.set(c, n);
            }
        }

        console.log(t);
        for(const c of t){
            if(!caracteres2.has(c)) caracteres2.set(c, 1);
            else {
                let n = caracteres2.get(c) + 1;
                caracteres2.set(c, n);
            }
        }

        console.log(caracteres1);
        console.log(caracteres2);

        for (const [key, value] of caracteres1) {
            if (!caracteres2.has(key)) {
                return false;
            }

            if (caracteres2.get(key) !== value) {
                return false;
            }
        }

        return true;
    }
}
