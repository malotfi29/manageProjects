import { Field, Label, Switch } from "@headlessui/react";
function Toggle({label,enabled,onChange}) {
  return (
    <Field>
      <div className="flex items-center gap-x-2">
        <Label>{label}</Label>
        <Switch
          checked={enabled}
          onChange={onChange}
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
          // className={`${
          //     enabled ? "bg-primary-900" : "bg-secondary-200"
          // }group  inline-flex h-6 w-11 items-center rounded-full transition`}
        >
          <span
            className={`${
              enabled ? "-translate-x-6" : "-translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-secondary-0 transition-transform `}
          />
        </Switch>
      </div>
    </Field>
  );
}

export default Toggle;
