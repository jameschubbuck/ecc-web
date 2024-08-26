import FacebookButton from "./cui/facebook-button"
import LanguageDropdown from "./cui/language-dropdown"
import ThemeDropdown from "./cui/theme-dropdown"

export const MainNav = () => {
    return (
        <div style={{ display: "flex", marginLeft: "auto"}}>
            <FacebookButton />
            <LanguageDropdown />
            <ThemeDropdown />
        </div>
    )
}