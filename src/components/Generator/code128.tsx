import { useBarcode } from "next-barcode";

const Code128 = ({ data }: { data: string }) => {
  const { inputRef } = useBarcode({
    value: data,
    options: {
      format: "CODE128",
      background: "#fff",
      width: 2,
    },
  });

  return <svg ref={inputRef} />;
};

export default Code128;
