// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rY1Gt6hjQrRvqMhh3q425n
// Component: hcateiUMeWk_

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

import NavigationBar from "../../NavigationBar"; // plasmic-import: 6SnOwwEGnja9/component
import ProjectHeader from "../../ProjectHeader"; // plasmic-import: 3WG5jolSY8SI/component
import ProjectCard from "../../ProjectCard"; // plasmic-import: so5weq24VuiV/component
import ContactSection from "../../ContactSection"; // plasmic-import: afbHaOgF2DSq/component
import Footer from "../../Footer"; // plasmic-import: zDwRbWMETZH5/component

import { useScreenVariants as useScreenVariantsmtm3A4Oo9HSa } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: mtm3a4OO9hSa/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: rY1Gt6hjQrRvqMhh3q425n/projectcss
import sty from "./PlasmicWebsiteRedesign.module.css"; // plasmic-import: hcateiUMeWk_/css

import wallpaperjpgFImlHruSsh2 from "./images/wallpaperjpg.jpg"; // plasmic-import: F-ImlHRUSsh2/picture
import studentGae18422981280JpgVl57I4Pn9TUd from "./images/studentGae18422981280Jpg.jpg"; // plasmic-import: VL57I4Pn9tUD/picture
import laptopG9B1Ff63691280JpgSv3IwUvPQrx from "./images/laptopG9B1Ff63691280Jpg.jpg"; // plasmic-import: SV3iwUvP_qrx/picture
import entrepreneurG23179Fc2C1280JpgK2SDflTyKQfh from "./images/entrepreneurG23179Fc2C1280Jpg.jpg"; // plasmic-import: k2SDflTyKQfh/picture
import laptopG9A7A99E251920JpgWoj87HJxGyS8 from "./images/laptopG9A7A99E251920Jpg.jpg"; // plasmic-import: woj87HJxGyS8/picture
import abstractBackgroundJpgTjxyzn6BfjE from "./images/abstractBackgroundJpg.jpg"; // plasmic-import: TJXYZN6bfjE_/picture

createPlasmicElementProxy;

export type PlasmicWebsiteRedesign__VariantMembers = {};
export type PlasmicWebsiteRedesign__VariantsArgs = {};
type VariantPropType = keyof PlasmicWebsiteRedesign__VariantsArgs;
export const PlasmicWebsiteRedesign__VariantProps =
  new Array<VariantPropType>();

export type PlasmicWebsiteRedesign__ArgsType = {};
type ArgPropType = keyof PlasmicWebsiteRedesign__ArgsType;
export const PlasmicWebsiteRedesign__ArgProps = new Array<ArgPropType>();

export type PlasmicWebsiteRedesign__OverridesType = {
  root?: Flex__<"div">;
  navigationBar?: Flex__<typeof NavigationBar>;
  projectHeader?: Flex__<typeof ProjectHeader>;
  h2?: Flex__<"h2">;
  contactSection?: Flex__<typeof ContactSection>;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultWebsiteRedesignProps {
  className?: string;
}

const $$ = {};

function PlasmicWebsiteRedesign__RenderFunc(props: {
  variants: PlasmicWebsiteRedesign__VariantsArgs;
  args: PlasmicWebsiteRedesign__ArgsType;
  overrides: PlasmicWebsiteRedesign__OverridesType;
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
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
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
          <NavigationBar
            data-plasmic-name={"navigationBar"}
            data-plasmic-override={overrides.navigationBar}
            className={classNames("__wab_instance", sty.navigationBar)}
          />

          <ProjectHeader
            data-plasmic-name={"projectHeader"}
            data-plasmic-override={overrides.projectHeader}
            className={classNames("__wab_instance", sty.projectHeader)}
            timeline={"Sep - Dec 2023"}
            title={"Website Redesign"}
          />

          <Stack__
            as={"section"}
            hasGap={true}
            className={classNames(projectcss.all, sty.section___8RVl6)}
            id={"Services"}
          >
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__b3FNe)}
              displayHeight={"700px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              loading={"lazy"}
              src={{
                src: wallpaperjpgFImlHruSsh2,
                fullWidth: 1921,
                fullHeight: 1081,
                aspectRatio: undefined
              }}
            />
          </Stack__>
          <Stack__
            as={"section"}
            hasGap={true}
            className={classNames(projectcss.all, sty.section__eJnKb)}
            id={"work"}
          >
            <div className={classNames(projectcss.all, sty.freeBox__dpOw)}>
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__lTu8V
                )}
              >
                {"The Client."}
              </h3>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___166Ek
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__bm69)}>
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__b5VWu
                )}
              >
                {"The Problem."}
              </h3>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__egnOz
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__ovju)}>
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3___4KOx6
                )}
              >
                {"The Solution."}
              </h3>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xnFqg
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </div>
            </div>
            <Stack__
              as={"section"}
              hasGap={true}
              className={classNames(projectcss.all, sty.section__ezDX)}
              id={"about"}
            >
              <div className={classNames(projectcss.all, sty.freeBox__ztOko)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__r2Wao)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: studentGae18422981280JpgVl57I4Pn9TUd,
                    fullWidth: 1280,
                    fullHeight: 853,
                    aspectRatio: undefined
                  }}
                />

                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.columns__dXz4H)}
                >
                  <div
                    className={classNames(projectcss.all, sty.column__zFkdw)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__he26G)}
                      displayHeight={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "300px"
                          : "600px"
                      }
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"100%"}
                      loading={"lazy"}
                      src={{
                        src: laptopG9B1Ff63691280JpgSv3IwUvPQrx,
                        fullWidth: 1280,
                        fullHeight: 853,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.column__g0HkP)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__cVyLp)}
                      displayHeight={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "300px"
                          : "600px"
                      }
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"100%"}
                      loading={"lazy"}
                      src={{
                        src: entrepreneurG23179Fc2C1280JpgK2SDflTyKQfh,
                        fullWidth: 1280,
                        fullHeight: 853,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                </Stack__>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__zsGNa)}>
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3___9Atxn
                  )}
                >
                  {"The Process."}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__uP6Ee
                  )}
                >
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                  }
                </div>
              </div>
            </Stack__>
            <Stack__
              as={"section"}
              hasGap={true}
              className={classNames(projectcss.all, sty.section__xp2Em)}
              id={"about"}
            >
              <div className={classNames(projectcss.all, sty.freeBox___3Py4)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__tDkhF)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  loading={"lazy"}
                  src={{
                    src: laptopG9A7A99E251920JpgWoj87HJxGyS8,
                    fullWidth: 1920,
                    fullHeight: 1280,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__ntf5P)}>
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__qvZpp
                  )}
                >
                  {"The Result."}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__yMvDs
                  )}
                >
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                  }
                </div>
              </div>
            </Stack__>
            <Stack__
              as={"section"}
              hasGap={true}
              className={classNames(projectcss.all, sty.section__jsIeC)}
              id={"contact"}
            >
              <div className={classNames(projectcss.all, sty.freeBox__gd43X)}>
                <h2
                  data-plasmic-name={"h2"}
                  data-plasmic-override={overrides.h2}
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2
                  )}
                >
                  {"See my all other \nprojects."}
                </h2>
              </div>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns__xnlC)}
              >
                <div className={classNames(projectcss.all, sty.column__dfPdL)}>
                  <ProjectCard
                    className={classNames(
                      "__wab_instance",
                      sty.projectCard__gtJzM
                    )}
                    image={{
                      src: abstractBackgroundJpgTjxyzn6BfjE,
                      fullWidth: 1920,
                      fullHeight: 1171,
                      aspectRatio: undefined
                    }}
                    link={`/web-visual-design`}
                    title={"Web Visual Design"}
                  />
                </div>
                <div className={classNames(projectcss.all, sty.column__tfJrc)}>
                  <ProjectCard
                    className={classNames(
                      "__wab_instance",
                      sty.projectCard__jgWj9
                    )}
                    link={`/project-relaunch`}
                    title={"Project Relaunch"}
                  />
                </div>
              </Stack__>
            </Stack__>
          </Stack__>
          <ContactSection
            data-plasmic-name={"contactSection"}
            data-plasmic-override={overrides.contactSection}
            className={classNames("__wab_instance", sty.contactSection)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navigationBar",
    "projectHeader",
    "h2",
    "contactSection",
    "footer"
  ],
  navigationBar: ["navigationBar"],
  projectHeader: ["projectHeader"],
  h2: ["h2"],
  contactSection: ["contactSection"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navigationBar: typeof NavigationBar;
  projectHeader: typeof ProjectHeader;
  h2: "h2";
  contactSection: typeof ContactSection;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicWebsiteRedesign__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWebsiteRedesign__VariantsArgs;
    args?: PlasmicWebsiteRedesign__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicWebsiteRedesign__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicWebsiteRedesign__ArgsType,
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
          internalArgPropNames: PlasmicWebsiteRedesign__ArgProps,
          internalVariantPropNames: PlasmicWebsiteRedesign__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicWebsiteRedesign__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWebsiteRedesign";
  } else {
    func.displayName = `PlasmicWebsiteRedesign.${nodeName}`;
  }
  return func;
}

export const PlasmicWebsiteRedesign = Object.assign(
  // Top-level PlasmicWebsiteRedesign renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navigationBar: makeNodeComponent("navigationBar"),
    projectHeader: makeNodeComponent("projectHeader"),
    h2: makeNodeComponent("h2"),
    contactSection: makeNodeComponent("contactSection"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicWebsiteRedesign
    internalVariantProps: PlasmicWebsiteRedesign__VariantProps,
    internalArgProps: PlasmicWebsiteRedesign__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Website Redesign",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicWebsiteRedesign;
/* prettier-ignore-end */
