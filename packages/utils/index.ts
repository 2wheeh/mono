type TProject = {
  title: string;
  subtitle: string;
};

export const testStr: string = '내보내줘';

const PROJECT: TProject = {
  title: 'Site Title',
  subtitle: 'My great monorepo',
};

export function getSiteInfo() {
  return { title: PROJECT.title, subtitle: PROJECT.subtitle };
}
