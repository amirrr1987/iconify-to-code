const { widget } = figma;
const { useSyncedState, usePropertyMenu, AutoLayout, Text, SVG, Input } =
  widget;

const copy = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z" stroke="#5685EE" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.33301 10.0002H2.66634C2.31272 10.0002 1.97358 9.85969 1.72353 9.60964C1.47348 9.35959 1.33301 9.02045 1.33301 8.66683V2.66683C1.33301 2.31321 1.47348 1.97407 1.72353 1.72402C1.97358 1.47397 2.31272 1.3335 2.66634 1.3335H8.66634C9.01996 1.3335 9.3591 1.47397 9.60915 1.72402C9.8592 1.97407 9.99967 2.31321 9.99967 2.66683V3.3335" stroke="#5685EE" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const paste = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 3H11.75C12.0815 3 12.3995 3.12877 12.6339 3.35798C12.8683 3.58719 13 3.89807 13 4.22222V12.7778C13 13.1019 12.8683 13.4128 12.6339 13.642C12.3995 13.8712 12.0815 14 11.75 14H4.25C3.91848 14 3.60054 13.8712 3.36612 13.642C3.1317 13.4128 3 13.1019 3 12.7778V4.22222C3 3.89807 3.1317 3.58719 3.36612 3.35798C3.60054 3.12877 3.91848 3 4.25 3H5.5" stroke="#5685EE" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.5 2H6.5C6.22386 2 6 2.22386 6 2.5V3.5C6 3.77614 6.22386 4 6.5 4H9.5C9.77614 4 10 3.77614 10 3.5V2.5C10 2.22386 9.77614 2 9.5 2Z" stroke="#5685EE" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

function Widget() {
  const [text, setText] = useSyncedState("text", "");
  const iconCode = `<Icon icon="${text}" size="" />`;

  return (
    <AutoLayout
      spacing={24}
      padding={24}
      cornerRadius={8}
      fill={"#FFFFFF"}
      stroke={"#E6E6E6"}
      direction="vertical"
      name="iconify-to-code"
    >
      <AutoLayout name="input-code" direction="vertical" spacing={8}>
        <Text fontSize={16} width={500} name="title" fill="#444">
          Icon name:
        </Text>

        <AutoLayout
          name="cc"
          direction="horizontal"
          stroke="#CCC"
          verticalAlignItems="center"
        >
          <Input
            name="input"
            value={text}
            placeholder="Enter icon name.."
            onTextEditEnd={(e) => {
              setText(e.characters);
            }}
            fontSize={16}
            fill="#212121"
            width={500}
            inputFrameProps={{
              fill: "#FFF",
              cornerRadius: 4,
              padding: 12,
            }}
            inputBehavior="wrap"
          />
          <SVG width={24} height={24} src={paste} />
        </AutoLayout>
      </AutoLayout>

      <AutoLayout name="output" direction="vertical" spacing={8}>
        <Text fontSize={16} width={500} name="title" fill="#444">
          Icon code:
        </Text>

        <AutoLayout name="cc" direction="horizontal">
          <Text fontSize={16} width={500} name="icon-code">
            {iconCode}
          </Text>
          <SVG
            width={24}
            height={24}
            src={copy}
            onClick={() => {
              const iconCode = `<Icon icon="${text}" size="" />`;
              if (text !== "") {
                console.log(iconCode);
                console.log(widget.Text.name);
              }
            }}
          />
        </AutoLayout>
      </AutoLayout>
    </AutoLayout>
  );
}

widget.register(Widget);
