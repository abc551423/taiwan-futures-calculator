type NumberInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  min?: number;
};

export default function NumberInput({
  value,
  onChange,
  placeholder,
  min = 0,
}: NumberInputProps) {
  return (
    <input
      type="number"
      value={value}
      placeholder={placeholder}
      onChange={(e) => {
        const newValue = e.target.value;

        // 允許清空輸入框
        if (newValue === "") {
          onChange("");
          return;
        }

        // 若有設定 min，則阻擋小於 min 的數字
        if (Number(newValue) >= min) {
          onChange(newValue);
        }
      }}
      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-500"
    />
  );
}