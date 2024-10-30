const CheckoutItem = ({ src, title, type = "", price, quantity }) => {
  return (
    <li className="gap-x-4 flex ">
      <div className="w-16 h-16 relative block">
        <img src={src} alt={title} width={64} height={64} className="h-full w-full block" />
        <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center rounded-full bg-slate-800 text-white text-[10px]">
          {quantity}
        </span>
      </div>
      <div className="flex grow">
        <div className="grow">
          <h1>{title}</h1>
          <span className="text-sm">{type}</span>
        </div>
        <span className="flex items-center">
          <span className="line-through">N</span>
          {price.toLocaleString()}
        </span>
      </div>
    </li>
  );
};

export default CheckoutItem;
