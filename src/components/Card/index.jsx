import Button from "../Button";

function Card({ img, excerpt, category, body, date }) {
  return (
    <div className="flex">
      {img && <img src="https://picsum.photos/110/110" alt="img"></img>}
      <div className={img ? "px-4" : ""}>
        <div className="flex mb-2 items-center">
          <Button type="primary">{category}</Button>
          <a className="ml-2 bg-transparent text-[var(--text-body)] text-[12.8px] hover:underline cursor-pointer">
            Jan 01, 2045
          </a>
        </div>

        <a className="text-[12.8px] hover:underline cursor-pointer">
          {excerpt}
        </a>
      </div>
    </div>
  );
}

export default Card;
