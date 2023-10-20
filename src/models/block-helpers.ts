type TypeWithClass<T> = T & {
  class: string;
};

export default TypeWithClass;
