import React, { useEffect } from "react";
import { themeChange } from "theme-change";
import themes from '../utils/themes'

const ThemePicker = () => {
    useEffect(() => {
        themeChange(false);
    }, []);

    return (
        <div className="my-5 flex place-content-center">
            <div className="form-control w-full max-w-sm">
                <label className="label">
                    <span className="label-text">Choose your look</span>
                    <div className="label-text-alt">
                        Pick like there's no tomorrow
                    </div>
                </label>
                <select className="select w-full" data-choose-theme>
                    {themes.map((theme) => {
                        return (
                            <option key={theme} value={theme}>
                                {theme}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    )
}

export default ThemePicker;