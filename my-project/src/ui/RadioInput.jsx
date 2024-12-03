function RadioInput({label,value,register,id,name,checked,validationSchema,errors}) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        className="cursor-pointer w-4 h-4 text-primary-900 focus:ring-primary-900 form-radio"
        type="radio"
        name={name}
        id={id}
        value={value}
        {...register(name,validationSchema)}
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
      
    </div>
  );
}

export default RadioInput;
