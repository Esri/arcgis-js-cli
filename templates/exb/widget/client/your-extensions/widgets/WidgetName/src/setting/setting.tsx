import { React, FormattedMessage } from "jimu-core";
import { BaseWidgetSetting, AllWidgetSettingProps } from "jimu-for-builder";
import { IMConfig } from "../config";
import defaultI18nMessages from "./translations/default";

export default class Setting extends BaseWidgetSetting<
  AllWidgetSettingProps<IMConfig>,
  any
> {
  onExampleConfigPropertyChange = (evt: React.FormEvent<HTMLInputElement>) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set(
        "exampleConfigProperty",
        evt.currentTarget.value
      )
    });
  };

  render() {
    return (
      <div className="widget-setting-demo">
        <div>
          <FormattedMessage
            id="exampleConfigProperty"
            defaultMessage={defaultI18nMessages.exampleConfigProperty}
          />
          :{" "}
          <input
            defaultValue={this.props.config.exampleConfigProperty}
            onChange={this.onExampleConfigPropertyChange}
          />
        </div>
      </div>
    );
  }
}
