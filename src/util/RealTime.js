/**
 * Created by xavier on 4/20/16.
 */
export default function realTime() {
    console.log()
    return (target, property, descriptor) => console.log(target, property, descriptor);
}
