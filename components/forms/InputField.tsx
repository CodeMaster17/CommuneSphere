// Your Input component import

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

type InputFieldProps = {
    formName?: string;
    name: string;
    control: any;
    placeholder: string;
    type?: string;
};

export const InputField: React.FC<InputFieldProps> = ({ formName, name, control, placeholder, type = 'text' }) => (
    <FormField control={control} name={name} render={({ field }) => (
        <FormItem>
            {formName && <FormLabel>{formName}</FormLabel>}
            <FormControl>
                <Input placeholder={placeholder} type={type} {...field} className="border-gray-300" />
            </FormControl>
            <FormMessage />
        </FormItem>
    )}
    />
);
