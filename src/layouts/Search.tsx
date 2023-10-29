import config from "@/config/config.json";
import { humanize, plainify, slugify } from "@/lib/utils/textConverter";
import Fuse from "fuse.js";
import React, { useEffect, useRef, useState } from "react";
import {
  FaRegFolder,
  FaRegUserCircle,
  FaSearch,
} from "react-icons/fa/index.js";

const { summary_length, blog_folder } = config.settings;

export type SearchItem = {
  slug: string;
  data: any;
  content: any;
};

interface Props {
  searchList: SearchItem[];
}

interface SearchResult {
  item: SearchItem;
  refIndex: number;
}

const Search = ({ searchList }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value);
  };

  const fuse = new Fuse(searchList, {
    keys: ["data.title", "data.categories", "data.tags"],
    includeMatches: true,
    minMatchCharLength: 3,
    threshold: 0.5,
  });

  useEffect(() => {
    const searchUrl = new URLSearchParams(window.location.search);
    const searchStr = searchUrl.get("q");
    if (searchStr) setInputVal(searchStr);

    setTimeout(function () {
      inputRef.current!.selectionStart = inputRef.current!.selectionEnd =
        searchStr?.length || 0;
    }, 50);
  }, []);

  useEffect(() => {
    let inputResult = inputVal.length > 2 ? fuse.search(inputVal) : [];
    setSearchResults(inputResult);

    if (inputVal.length > 0) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("q", inputVal);
      const newRelativePathQuery =
        window.location.pathname + "?" + searchParams.toString();
      history.pushState(null, "", newRelativePathQuery);
    } else {
      history.pushState(null, "", window.location.pathname);
    }
  }, [inputVal]);

  return (
    <section className="section-sm pb-0">
      <div className="container mb-20"> 
        <div className="row justify-center">
          <div className="lg:col-8">
            <div className="flex flex-nowrap mb-10">
              <input
                className="form-input rounded-r-none"
                placeholder="Search posts"
                type="search"
                name="search"
                value={inputVal}
                onChange={handleChange}
                autoComplete="off"
                autoFocus
                ref={inputRef}
              />
              <button className="btn btn-primary rounded-l-none" type="submit">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>

        {/* {inputVal.length > 1 && (
          <div className="mt-8">
            Found {searchResults?.length}
            {searchResults?.length && searchResults?.length === 1
              ? " result"
              : " results"}{" "}
            for '{inputVal}'
          </div>
        )} */}
        <div className="row">
          {searchResults?.length < 1 ? (
            <div className="mx-auto pt-5 text-center">

              <h1 className="h2 mb-4">
                {inputVal.length < 1 ? "Search Post Here" : "No Search Found!"}
              </h1>
              <p>
                {inputVal.length < 1
                  ? "Search for posts by title, category, or tag."
                  : "We couldn't find what you searched for. Try searching again."}
              </p>
            </div>
          ) : (
            searchResults?.map(({ item }, index) => (
              <div className="mb-12 md:col-6 lg:col-4" key={`search-${index}`}>
                <div className="bg-body dark:bg-darkmode-body">
                  {item.data.image && (
                    <img
                      className="mb-6 w-full rounded"
                      src={item.data.image}
                      alt={item.data.title}
                      width={445}
                      height={230}
                    />
                  )}
                  <h4 className="mb-3">
                    <a href={`/${blog_folder}/${item.slug}`}>
                      {item.data.title}
                    </a>
                  </h4>
                  <ul className="mb-4">
                    <li className="mr-4 inline-block">
                      <a href={`/authors/${slugify(item.data.author)}`}>
                        <FaRegUserCircle
                          className={"-mt-1 mr-2 inline-block"}
                        />
                        {humanize(item.data.author)}
                      </a>
                    </li>
                    <li className="mr-4 inline-block">
                      <FaRegFolder className={"-mt-1 mr-2 inline-block"} />
                      {item.data.categories.map(
                        (category: string, index: number) => (
                          <a
                            href={`/categories/${slugify(category)}`}
                            key={category}
                          >
                            {humanize(category)}
                            {index !== item.data.categories.length - 1 && ", "}
                          </a>
                        ),
                      )}
                    </li>
                  </ul>
                  <p className="mb-6">
                    {plainify(item.content?.slice(0, Number(summary_length)))}
                  </p>
                  <a
                    className="btn btn-outline-primary btn-sm"
                    href={`/${blog_folder}/${item.slug}`}
                  >
                    read more
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    <div className="mb-0">
      <div className="container p-0">
        <div className="bg-theme-light px-4 py-16 dark:bg-darkmode-theme-light xl:p-20">
          <div className="row items-center justify-center">
            <div className="mb-10 md:col-5 lg:col-4 md:order-2 md:mb-0">
              <img className="w-full" alt="cta-image" width="520" height="400" src="/images/cta-gear.webp" loading="lazy" decoding="async"/>
            </div>
            <div className="md:col-7 md:order-1">
              <h2 className="mb-2">Looking for gear tips and reviews?</h2>
              <p className="mb-6">Every item of gear has been meticulously crafted to fulfill precise needs and purposes. Discover which gear meets the mark and which ones may fall short. Additionally, I&#39;ll make it a priority to help you find optimal value for your investment and share a handful of trade secrets to enhance your experience.</p>
              <a className="btn btn-primary" href="/tags/gear">
                  Get Started Now with Gear ➜
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    
  );
  
};

export default Search;
