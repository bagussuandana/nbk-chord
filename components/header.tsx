'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { Github, Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import appConfig from '@/app.config';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';
import ListItem from './list-item';

const Header = () => {
  const { routes, logo, githubRepo, description } = appConfig;

  const pathname = usePathname();
  const activePathname = routes.find(
    (item: any) => item.value == '/' + pathname.split('/')[1]
  )?.value;

  const active = routes.find(
    (item: any) => item.value == '/' + pathname.split('/')[1]
  )?.name;

  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const components: { title: string; href: string; description: string }[] = [
    {
      title: 'BNBK',
      href: '/song-list',
      description: 'Kumpulan lagu untuk Nyanyian Bala Keselamatan',
    },
    {
      title: 'Worships',
      href: '/worship-list',
      description: 'Kumpulan lagu pujian dari berbagai sumber.',
    },
    {
      title: 'Chorus',
      href: '/chorus-list',
      description:
        'Kumpulan lagu pujian singkat berupa kor dari berbagai sumber.',
    },
  ];

  return (
    <div
      className={
        'w-full sticky top-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md shadow-sm z-10 min-h-20'
      }
    >
      <header className={'container flex justify-between py-4'}>
        <div className={'flex justify-center items-center'}>
          <Link href={'/'} className={'block md:hidden space-x-1'}>
            {logo?.image && (
              <Image src={logo?.image} height={28} width={28} alt={'logo'} />
            )}
          </Link>
          <div className={'hidden md:block space-x-1'}>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className='hover:!bg-transparent'>
                    {logo?.image && (
                      <Image
                        src={logo?.image}
                        height={28}
                        width={28}
                        alt={'logo'}
                      />
                    )}
                    {logo?.text && (
                      <div
                        className={'ml-1 text-lg font-semibold md:block hidden'}
                      >
                        {logo?.text}
                      </div>
                    )}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                      <li className='row-span-3'>
                        <NavigationMenuLink asChild>
                          <Link
                            className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                            href='/'
                          >
                            {logo?.image && (
                              <Image
                                src={logo?.image}
                                height={28}
                                width={28}
                                alt={'logo'}
                              />
                            )}
                            <div className='mb-2 mt-4 text-lg font-medium'>
                              {logo?.text}
                            </div>
                            <p className='text-sm leading-tight text-muted-foreground'>
                              {description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>

                      <ListItem
                        className={
                          activePathname == '/privacy-policy'
                            ? 'bg-accent text-accent-foreground'
                            : ''
                        }
                        href='/privacy-policy'
                        title='Kebijakan Privasi'
                      >
                        Kebijakan privasi yang menjelaskan bagaimana kami
                        mengumpulkan, menggunakan, dan melindungi informasi
                        Anda.
                      </ListItem>

                      <ListItem
                        className={
                          activePathname == '/terms-and-conditions'
                            ? 'bg-accent text-accent-foreground'
                            : ''
                        }
                        href='/terms-and-conditions'
                        title='Syarat & Ketentuan'
                      >
                        Syarat dan ketentuan layanan ini berisi peraturan dan
                        jaminan yang mengikat Anda dan penggunaan Anda atas
                        Layanan.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Songs</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                      {components.map((component) => (
                        <ListItem
                          className={
                            activePathname == component.href
                              ? 'bg-accent text-accent-foreground'
                              : ''
                          }
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className={'flex justify-center items-center space-x-1'}>
          <div className={'md:hidden block'}>
            <Sheet
              open={open}
              onOpenChange={() => {
                setOpen(!open);
              }}
            >
              <SheetTrigger>
                <Button size={'icon'} variant={'ghost'}>
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent
                side={'top'}
                className={'w-full space-y-4 p-12 text-sm'}
              >
                {routes.map((route: any, index: number) => (
                  <div className={'space-y-4'} key={index}>
                    <Link
                      href={route.value}
                      onClick={() => {
                        setOpen(false);
                        if (typeof window !== 'undefined') {
                          localStorage.setItem('prevUrl', '');
                        }
                      }}
                    >
                      <Button
                        variant={active == route.name ? 'secondary' : 'ghost'}
                        className={'text-base w-full'}
                      >
                        {route.name}
                      </Button>
                    </Link>
                    {index != routes.length - 1 && <Separator />}
                  </div>
                ))}
              </SheetContent>
            </Sheet>
          </div>

          <Link href={githubRepo} target='_blank'>
            <Button size={'icon'} variant={'ghost'}>
              <Github />
            </Button>
          </Link>
          <Button
            size={'icon'}
            variant={'ghost'}
            onClick={() => {
              setTheme(theme == 'light' ? 'dark' : 'light');
            }}
          >
            {theme == 'light' && <Sun size={20} />}
            {theme == 'dark' && <Moon size={20} />}
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Header;
