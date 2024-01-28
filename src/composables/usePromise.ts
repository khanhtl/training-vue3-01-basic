import { ref } from "vue";

export default function usePromise(fn: Function) {
    const result=ref<any>(null);
    const loading=ref<any>(false);
    const error=ref<any>(null);

    const createPromise= async (...args: any[]) => {
        loading.value=true;
        error.value=null;
        result.value=null;
        try {
            result.value=await fn(...args);
            console.log(result.value);
            
        } catch (err) {
            error.value=err;
        } finally {
            loading.value=false;
        }
    }
    return {createPromise, result, loading, error}
}