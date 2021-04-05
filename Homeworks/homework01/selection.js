export default class Selection {
    removeFalsyValues(array) {
       const a = 0;
       const b = !a;

       return array.filter(val => !!val);
    }
}
