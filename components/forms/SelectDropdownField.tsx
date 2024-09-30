import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

type SelectFieldProps = {
    name: string;
    control: any;
    placeholder: string;
    options: { label: string; value: string }[];
};

export const SelectField: React.FC<SelectFieldProps> = ({ name, control, placeholder, options }) => (
    <FormField control={control} name={name} render={({ field }) => (
        <FormItem>
            <FormLabel>{name}</FormLabel>
            <Select onValueChange={field.onChange}>
                <FormControl>
                    <SelectTrigger className="border-gray-300 text-gray-500">
                        <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                </FormControl>
                <SelectContent>
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <FormMessage />
        </FormItem>
    )}
    />
);
