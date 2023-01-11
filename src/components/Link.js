import NextLink from 'next/link';

export default function Link({ children, href, ...props }) {
  //abstrai link do next para desacoplar
  return (
    <NextLink href={href} passHref legacyBehavior>
        <a href={href} style={{ color: 'black' }}>
            {children}
        </a>    
    </NextLink>
  );
}