import * as React from 'react';
import { useState } from 'react';

interface FormItem {
    label: string;
    name: string;
    type?: string;
    shouldConfirm?: boolean;
    isTextArea?: boolean;
}

type FormProps = FormItem[];

function useForm(items: FormProps): [React.JSX.Element[]]