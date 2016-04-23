/**
 * Created by xavier on 4/20/16.
 */
// @flow
export default function realTime(path:string, config:Array<string, string>) {
    console.log("vaya ahi")
    return (target, property, descriptor) => console.log(target, property, descriptor);
}
    