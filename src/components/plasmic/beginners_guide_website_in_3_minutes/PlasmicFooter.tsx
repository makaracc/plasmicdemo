// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rY1Gt6hjQrRvqMhh3q425n
// Component: zDwRbWMETZH5

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { useScreenVariants as useScreenVariantsmtm3A4Oo9HSa } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: mtm3a4OO9hSa/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: rY1Gt6hjQrRvqMhh3q425n/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: zDwRbWMETZH5/css

import FacebookIcon from "./icons/PlasmicIcon__Facebook"; // plasmic-import: IiZbPsDRlDUJ/icon
import group11PngDhR2Ke4MOb3A from "./images/group11Png.png"; // plasmic-import: dhR2Ke4mOB3a/picture
import twitterpngNc0Xhjcf7PEq from "./images/twitterpng.png"; // plasmic-import: Nc0XHJCF7PEq/picture
import linkedinpngMwn2U3CbsZjq from "./images/linkedinpng.png"; // plasmic-import: mwn2U3CbsZjq/picture
import image14Ch1McRbbiDoU from "./images/image14.png"; // plasmic-import: Ch1mcRbbiDoU/picture

createPlasmicElementProxy;

export type PlasmicFooter__VariantMembers = {};
export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: Flex__<"div">;
  links?: Flex__<"section">;
  svg?: Flex__<"svg">;
  instapng?: Flex__<typeof PlasmicImg__>;
  section?: Flex__<"div">;
};

export interface DefaultFooterProps {
  className?: string;
}

const $$ = {};

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsmtm3A4Oo9HSa()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"section"}
        data-plasmic-name={"links"}
        data-plasmic-override={overrides.links}
        hasGap={true}
        className={classNames(projectcss.all, sty.links)}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__j30N)}
        >
          <a
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__mzxx5
            )}
            href={"/"}
          >
            {"Home"}
          </a>
          <a
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__y65U1
            )}
            href={"/#services"}
          >
            {"Services"}
          </a>
          <a
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__rtc8Q
            )}
            href={"/#work"}
          >
            {"Work"}
          </a>
          <a
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link___4Q3V8
            )}
            href={"/#about"}
          >
            {"About"}
          </a>
          <a
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__c2Iv3
            )}
            href={"/#contact"}
          >
            {"Contact"}
          </a>
        </Stack__>
        <div className={classNames(projectcss.all, sty.columns__jn8Lh)}>
          <div className={classNames(projectcss.all, sty.column__kpAPo)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__d1D)}
            >
              <a
                aria-label={"Facebook"}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__iQiLk
                )}
                href={"https://www.facebook.com"}
                target={"_blank"}
              >
                <FacebookIcon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  className={classNames(projectcss.all, sty.svg)}
                  role={"img"}
                />
              </a>
              <a
                aria-label={"Instagram"}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__wq7Rz
                )}
                href={"https://www.instagram.com"}
                target={"_blank"}
              >
                <PlasmicImg__
                  data-plasmic-name={"instapng"}
                  data-plasmic-override={overrides.instapng}
                  alt={""}
                  className={classNames(sty.instapng)}
                  displayHeight={"32px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"32px"}
                  loading={"lazy"}
                  src={{
                    src: group11PngDhR2Ke4MOb3A,
                    fullWidth: 326,
                    fullHeight: 326,
                    aspectRatio: undefined
                  }}
                />
              </a>
              <a
                aria-label={"Twitter"}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__es2Ii
                )}
                href={"https://www.twitter.com"}
                target={"_blank"}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__cKx8Z)}
                  displayHeight={"32px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"32px"}
                  loading={"lazy"}
                  src={{
                    src: twitterpngNc0Xhjcf7PEq,
                    fullWidth: 512,
                    fullHeight: 512,
                    aspectRatio: undefined
                  }}
                />
              </a>
              <a
                aria-label={"Linkedin"}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link___6JJqa
                )}
                href={"https://www.linkedin.com"}
                target={"_blank"}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img___8FqEl)}
                  displayHeight={"32px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"32px"}
                  loading={"lazy"}
                  src={{
                    src: linkedinpngMwn2U3CbsZjq,
                    fullWidth: 512,
                    fullHeight: 512,
                    aspectRatio: undefined
                  }}
                />
              </a>
            </Stack__>
          </div>
          <div className={classNames(projectcss.all, sty.column__xziNz)}>
            <div className={classNames(projectcss.all, sty.freeBox__mv9Ps)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__ulanz)}
                displayHeight={"32px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"32px"}
                loading={"lazy"}
                src={{
                  src: image14Ch1McRbbiDoU,
                  fullWidth: 204,
                  fullHeight: 156,
                  aspectRatio: undefined
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__t3Wzp
                )}
              >
                {"anna@design.com"}
              </div>
            </div>
          </div>
        </div>
      </Stack__>
      <div
        data-plasmic-name={"section"}
        data-plasmic-override={overrides.section}
        className={classNames(projectcss.all, sty.section)}
      >
        <div className={classNames(projectcss.all, sty.columns___7Yo9Q)}>
          <div className={classNames(projectcss.all, sty.column__zN5C)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__fDh0W
              )}
            >
              {"\u00a9 2030 Freelance Portfolio."}
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.column__lrWhQ)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__wd0Qo
              )}
            >
              {"Built by Anna Wu"}
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.column__lx6Wu)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__bYfzp
              )}
            >
              {hasVariant(globalVariants, "screen", "mobileOnly")
                ? "Made in Plasmic"
                : "Made in Plasmic"}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "links", "svg", "instapng", "section"],
  links: ["links", "svg", "instapng"],
  svg: ["svg"],
  instapng: ["instapng"],
  section: ["section"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  links: "section";
  svg: "svg";
  instapng: typeof PlasmicImg__;
  section: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooter__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    links: makeNodeComponent("links"),
    svg: makeNodeComponent("svg"),
    instapng: makeNodeComponent("instapng"),
    section: makeNodeComponent("section"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
