export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const getOptionNameById = (id: string, options: any[], keyForId: string, keyForName: string) => {
  const selectedOption = options.find((option) => option[keyForId] === +id);
  return selectedOption ? selectedOption[keyForName] : "";
};
