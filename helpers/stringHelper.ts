export class StringHelper{

    static format(parametrizedString: string, ...args: string[]): string {        
        let parameterizedString: string = parametrizedString;

        args.forEach((arg, index) => {
            parameterizedString = parameterizedString.replace('{' + index + '}', arg); 
        })
        return parameterizedString;
    }
}