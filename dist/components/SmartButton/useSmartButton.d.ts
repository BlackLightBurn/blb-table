import { FormState } from "react-hook-form";
interface FieldsProps {
    [key: string]: string | number | boolean | undefined;
}
export declare function useButtonStatus(formState: FormState<FieldsProps | object>, { timeout }?: {
    timeout?: number | undefined;
}): "success" | "default" | "loading" | "error";
export {};
