import type {Meta, StoryObj} from "@storybook/react";
import {waitFor} from "@storybook/testing-library";
import Image, {ImageProps} from "next/image";
import {waitForImagesToLoad} from "utils";

const meta = {
  title: "Display/Image",
  component: Image
} satisfies Meta<ImageProps>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Default Avatar variant */
export const Default = {
  args: {
    src: "https://powered-by.qbank.se/dm-umbraco/png_3840_1:1/Andersen-martini_s%C3%B8borg_38.png",
    alt: "Andersen-martini_søborg_38",
    width: 500,
    height: 500
  },
  play: async () => {
    await waitFor(waitForImagesToLoad, {timeout: 5000});
  },
  parameters: {
    chromatic: {
      viewports: [375, 640, 960, 1280, 1440]
    }
  },
  render: (args) => {
    return (
      <div style={{width: "100%", height: "100%", position: "relative"}}>
        <Image {...args} />
        <Image {...args} />
        <Image {...args} />
        <Image {...args} />
        <Image {...args} />
        <Image {...args} />
      </div>
    );
  }
} satisfies Story;

export const Single = {
  args: Default.args,
  play: async () => {
    await waitFor(waitForImagesToLoad, {timeout: 5000});
  },
  parameters: {
    chromatic: {
      viewports: [375, 640, 960, 1280, 1440]
    }
  },
} satisfies Story;