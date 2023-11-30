import { FormState } from "react-hook-form";
import { useEffect, useState } from "react";

interface FieldsProps {
  [key: string]: string | number | boolean | undefined;
}

function getButtonStatus({
  isSubmitting,
  submitCount,
  isValid,
  errors,
  isSubmitted,
  isSubmitSuccessful,
}: FormState<FieldsProps | object>) {
  if (isSubmitting) {
    return 'loading';
  }
  if (isSubmitSuccessful) {
    return 'success';
  }
  if (submitCount && (!isValid || (isSubmitted && Object.keys(errors).length))) {
    return 'error';
  }
  return 'default';
}

export function useButtonStatus(formState: FormState<FieldsProps | object>, { timeout = 2000 } = {}) {
  const [buttonStatus, setButtonStatus] = useState<'success' | 'error' | 'loading' | 'default'>(
    'default',
  );

  const status = getButtonStatus(formState);
  useEffect(() => {
    setButtonStatus(status);
    if (['error', 'success'].includes(status)) {
      setTimeout(() => {
        setButtonStatus('default');
      }, timeout);
    }
  }, [status, timeout]);

  return buttonStatus;
}
