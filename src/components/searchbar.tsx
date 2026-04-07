import { useState } from "react";

const DropDown = ({ setHoveringBtn, buttonsAmount, hoveringBtn }) => {
  return (
    <div className="w-full h-50 relative">
      <div
        className="w-full h-full absolute z-0"
        onMouseEnter={() => setHoveringBtn(null)}
      />
      <div
        className="bg-olive-100 group rounded-b-lg"
        style={{
          width: `calc(100% / ${buttonsAmount})`,
          height: "100%",

          transform: `translateX(${hoveringBtn * 100}%)`,

          opacity: hoveringBtn === null ? 0 : 1,

          transition: `transform .25s cubic-bezier(0.7, 0, 0.3, 1) ${hoveringBtn === null ? "0.5s" : "0.05s"}, opacity .125s ease ${hoveringBtn !== null ? ".35s" : ".05s"}`,
        }}
      />
    </div>
  );
};

const SearchBar = ({
  setters: {
    setSearchType, // /search, /discover, /find
    setQueryType, // movie/series
    setSearch, // What we are searching for. If empty, do not search
    setLanguage, // en-US etc.
    setPage, // start at 1
    setAdult, // Pornographic content (force to be false(disabled))
  },
}) => {
  const placeholderButtons = ["Movie", "Language", "Year", "Genre"];
  const buttonsAmount = placeholderButtons.length;
  const [hoveringBtn, setHoveringBtn] = useState(null);

  return (
    <div className="h-[50vh] flex items-end justify-center">
      <div className="w-200">
        <form
          action=""
          className="group relative w-full h-max flex flex-col"
          onMouseLeave={() => setHoveringBtn(null)}
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-olive-100 w-full p-2 outline-0"
            onMouseEnter={() => setHoveringBtn(null)}
          />

          <div
            className={`flex justify-between bg-olive-300 overflow-hidden
              ${hoveringBtn === 0 ? "rounded-br-lg" : hoveringBtn === buttonsAmount - 1 ? "rounded-bl-lg" : "rounded-b-lg"}`}
            style={{
              transition:
                hoveringBtn !== null &&
                (hoveringBtn === 0 || hoveringBtn === buttonsAmount - 1)
                  ? "border-radius 0.5s ease 0.05s"
                  : "border-radius 0s ease",
            }}
          >
            {placeholderButtons.map((btn, index) => (
              <input
                value={btn}
                type="button"
                name={btn}
                id={btn + "navBtn"}
                className={`w-full h-full cursor-pointer py-4 ${hoveringBtn === index ? "group-hover:bg-olive-100" : ""}`}
                style={{ transition: "background-color 0.15s ease-in-out" }}
                onMouseEnter={() => setHoveringBtn(index)}
              />
            ))}
          </div>
          <DropDown
            setHoveringBtn={setHoveringBtn}
            hoveringBtn={hoveringBtn}
            buttonsAmount={buttonsAmount}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
