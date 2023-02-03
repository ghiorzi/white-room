import { 
    of,
    concat
} from 'rxjs';

const oneToFour$ = of([1, 2, 3, 4]);
const fourToSix$ = of([4, 5, 6]);

concat(
    oneToFour$,
    fourToSix$,
).subscribe({
    next: values => {
        // It'll emit two times since it's two observables
        console.log('=> ', values)
    }
});