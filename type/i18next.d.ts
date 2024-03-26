import "i18next";

const resources = {
  common: await import("@/libs/i18n/locales/th/common.json"),
//   bank: await import("@/libs/i18n/locales/th/bank.json"),
//   component: await import("@/libs/i18n/locales/th/component.json"),
//   order: await import("@/libs/i18n/locales/th/order.json"),
//   auth: await import("@/libs/i18n/locales/th/auth.json"),
//   round: await import("@/libs/i18n/locales/th/round.json"),
//   prize: await import("@/libs/i18n/locales/th/prize.json"),
//   transaction: await import("@/libs/i18n/locales/th/transaction.json"),
} as const;

declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof resources;
  }
}

declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: typeof resources;
  }
}

export type I18nNameSpace = keyof typeof resources;
