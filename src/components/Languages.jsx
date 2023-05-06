import { useAppContext } from "../contexts/app.context";

const Languages = () => {
  const { languages, setDefaultLanguage, setShowLanguagesMenu } =
    useAppContext();
  return (
    <div className="pt-8 px-8 pb-12 cursor-default">
      {languages.map((continents) => {
        return (
          <div className="pb-8" key={continents.continent}>
            <h2 className="text-2xl font-bold text-black px-2">
              {continents.continent}
            </h2>
            {continents.countries.map((country) => {
              return (
                <div
                  className="py-3 px-2 hover:rounded hover:bg-black/10 text-start ease-in-out duration-300"
                  key={country.country}
                >
                  <h3 className="text-sm font-semibold">{country.country}</h3>
                  {country.languages.map((language, index) => {
                    return (
                      <p
                        className="hover:underline decoration-2 underline-offset-4 ease duration-700 text-xs text-black/50 inline pr-2 cursor-pointer"
                        key={index}
                        onClick={(e) => {
                          const country =
                            e.currentTarget.parentElement.firstChild
                              .textContent;
                          const language = e.currentTarget.textContent;
                          setDefaultLanguage({
                            country: country,
                            language: language,
                          });
                          setShowLanguagesMenu(false);
                        }}
                      >
                        {language}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Languages;
