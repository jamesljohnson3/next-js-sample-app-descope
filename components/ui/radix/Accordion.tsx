import * as AccordionPrimitive from '@radix-ui/react-accordion';
import cx from 'classnames';
import NavItem from '../../ui/NavItem';
// import NavItem from '@ui/NavItem';
import { ReactNode } from 'react';

import {
	HiChevronDown,
	HiOutlineChartBarSquare,
	HiOutlineIdentification,
	HiOutlineFilm,
	HiOutlineBanknotes,
	HiOutlineCog8Tooth,
	HiOutlineLifebuoy,
	HiOutlineComputerDesktop,
	HiOutlineBolt,
} from 'react-icons/hi2';

interface AccordionItem {
	header: string;
	content?: ReactNode;
}

const items: AccordionItem[] = [
	{
		header: 'Creator Studio',
		content: (
			<>
				<NavItem href="https://go.unlimitpotential.com/dashboard" width="full" size="default">
					<HiOutlineChartBarSquare className="w-4 h-4" />
					<div className="inline-flex flex-none text-sm font-medium">
						Dashboard
					</div>
				</NavItem>
			</>
		),
	},
	{
		header: 'Advanced Options',
		content: (
			<>
				<NavItem href="https://workspace.unlimitpotential.com/directus-final3" width="full" size="default">
					<HiOutlineIdentification className="w-4 h-4" />
					<div className="inline-flex flex-none text-sm font-medium">
						Find
					</div>
				</NavItem>
				<NavItem href="https://go.unlimitpotential.com/connect" width="full" size="default">
					<HiOutlineFilm className="w-4 h-4" />
					<div className="inline-flex flex-none text-sm font-medium">
						Modify
					</div>
				</NavItem>
				<NavItem href="https://lillieai-betav1b.unlimitpotential.com/chat" width="full" size="default">
					<HiOutlineBanknotes className="w-4 h-4" />
					<div className="inline-flex flex-none text-sm font-medium">
					Ask
					</div>
				</NavItem>
			</>
		),
	},
	{
		header: 'Settings and Support',
		content: (
			<>
				<NavItem href="https://go.unlimitpotential.com/preferences" width="full" size="default">
					<HiOutlineCog8Tooth className="w-4 h-4" />
					<div className="inline-flex flex-none text-sm font-medium">
						Security and Privacy
					</div>
				</NavItem>
				<NavItem href="https://unlimitpotential.com/dashboard" width="full" size="default">
					<HiOutlineLifebuoy className="w-4 h-4" />
					<div className="inline-flex flex-none text-sm font-medium">
						Help Center
					</div>
				</NavItem>
				<NavItem href="https://developers.unlimitednow.me/" width="full" size="default">
					<HiOutlineComputerDesktop className="w-4 h-4" />
					<div className="inline-flex flex-none text-sm font-medium">
						Read Documentation
					</div>
				</NavItem>
				{/* <NavItem href="/" width="full" size="default">
					<HiOutlineBolt className="w-4 h-4" />
					<div className="inline-flex flex-none text-sm font-medium">
						Keyboard shortcuts
					</div>
				</NavItem> */}
			</>
		),
	},
];

interface AccordionProps {}

const Accordion = (props: AccordionProps) => (
	<AccordionPrimitive.Root collapsible type="single">
		{items.map(({ header, content }, i) => (
			<AccordionPrimitive.Item
				key={`header-${i}`}
				value={`item-${i + 1}`}
				className="focus:outline-none overflow-hidden"
			>
				<AccordionPrimitive.Header className="w-full">
					<AccordionPrimitive.Trigger
						className={cx(
							'AccordionTrigger group',
							'radix-state-open:rounded-t-lg radix-state-closed:rounded-lg',
							'focus:outline-none hover:bg-slate-100',
							'inline-flex w-full items-center justify-between bg-white px-4 py-4 text-left',
						)}
					>
						<span className="text-sm text-gray-900 font-bold">{header}</span>
						<HiChevronDown
							className={cx(
								'ml-2 h-5 w-5 shrink-0 text-gray-700 ease-in-out',
								'AccordionChevron',
							)}
						/>
					</AccordionPrimitive.Trigger>
				</AccordionPrimitive.Header>
				<AccordionPrimitive.Content className="AccordionContent w-full">
					{content}
				</AccordionPrimitive.Content>
			</AccordionPrimitive.Item>
		))}
	</AccordionPrimitive.Root>
);

export default Accordion;
