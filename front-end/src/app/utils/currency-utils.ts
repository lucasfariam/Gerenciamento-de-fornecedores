export class CurrencyUtils {
    // para trabalhar com tipo moeda
    public static StringParaDecimal(input): any {
        if (input === null) return 0;
        // aqui passamos as substituiçao do ponto por nada e virgula por ponto
        input = input.replace(/\./g, '');
        input = input.replace(/,/g, '.');
        return parseFloat(input); // aqui vamos devolver um numero
    }
    // devolvo um decimal e recebo uma string
    public static DecimalParaString(input): any {
        var ret = (input) ? input.toString().replace(".", ",") : null;
        if (ret) {
            var decArr = ret.split(",");
            if (decArr.length > 1) {
                var dec = decArr[1].length;
                if (dec === 1) { ret += "0"; }
            }
        }
        return ret;
    }
}