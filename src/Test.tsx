import {
	Flex,
	VStack,
	Heading,
	SimpleGrid,
	GridItem,
	FormControl,
	FormLabel,
	Input,
	Select,
	Checkbox,
	Button,
	HStack,
	Divider,
	Text,
	useColorModeValue,
	useBreakpointValue,
	Image,
	AspectRatio,
} from "@chakra-ui/react";

const Test = () => {
	// responsive props
	const cartSectionBGColor = useColorModeValue("gray.50", "whiteAlpha.50");
	const colSpan = useBreakpointValue({ base: 2, sm: 1 });

	return (
		<Flex
			minH="100vh"
			py={{ base: 0, md: 20 }}
			direction={{ base: "column-reverse", md: "row" }}
		>
			<VStack w="full" p={4} spacing={8} alignItems="flex-start">
				<VStack w="full" spacing={3} alignItems="flex-start">
					<Heading size="lg">متابعة عضويات النادي</Heading>
					<Text fontSize={15}>
						عن طريق هذا الموقع بتقدر تضيف شباب جدد للجم و تضيف اشتراكات
					</Text>
				</VStack>

				<SimpleGrid w="full" columns={2} rowGap={6} columnGap={3}>
					<GridItem colSpan={colSpan}>
						<FormControl>
							<FormLabel>اسم الشب</FormLabel>
							<Input variant="filled" placeholder="احمد مراد حمدان" />
						</FormControl>
					</GridItem>
					<GridItem colSpan={colSpan}>
						<FormControl>
							<FormLabel>رقم الجوال</FormLabel>
							<Input placeholder="0599112233" />
						</FormControl>
					</GridItem>
					<GridItem colSpan={colSpan}>
						<FormControl>
							<FormLabel>العنوان</FormLabel>
							<Input placeholder="الحارة الشرقية" />
						</FormControl>
					</GridItem>
					<GridItem colSpan={colSpan}>
						<FormControl>
							<FormLabel>الوظيفة</FormLabel>
							<Select>
								<option value="student">طالب</option>
								<option value="independent">عامل مستقل</option>
							</Select>
						</FormControl>
					</GridItem>
					<GridItem colSpan={2}>
						<Checkbox colorScheme="green" defaultChecked>
							من سكان بلعا الاصليين
						</Checkbox>
					</GridItem>
					<GridItem colSpan={2}>
						<Button colorScheme="green" isFullWidth>
							تسجيل
						</Button>
					</GridItem>
				</SimpleGrid>
			</VStack>

			<VStack
				w="full"
				bg={cartSectionBGColor}
				p={4}
				spacing={6}
				alignItems="flex-start"
			>
				<VStack alignItems="flex-start" spacing={3}>
					<Heading size="lg">سلة المشتريات</Heading>
					<Text fontSize={15}>استمتع بأفضل الاسعار واعلى الجودات</Text>
				</VStack>

				<HStack w="full" spacing={5}>
					<AspectRatio ratio={1} w={20}>
						<Image src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
					</AspectRatio>

					<HStack w="full" justifyContent="space-between">
						<VStack spacing={1.5} alignItems="flex-start">
							<Heading size="md">كرسي قصير</Heading>
							<Text color="gray.600" fontSize={13} fontWeight={500}>
								اكسسوارات البيت
							</Text>
						</VStack>
						<Heading size="sm">120 شيكل</Heading>
					</HStack>
				</HStack>

				<VStack w="full">
					<HStack w="full" justifyContent="space-between">
						<Text>سعر المنتج</Text>
						<Text fontSize="14px" fontWeight={700}>
							120 شيكل
						</Text>
					</HStack>
					<HStack w="full" justifyContent="space-between">
						<Text>سعر التوصيل</Text>
						<Text fontSize="14px" fontWeight={700}>
							20 شيكل
						</Text>
					</HStack>
					<HStack w="full" justifyContent="space-between">
						<Text>الضريبة</Text>
						<Text fontSize="14px" fontWeight={700}>
							0 شيكل
						</Text>
					</HStack>
					<HStack w="full" justifyContent="space-between">
						<Text>السعر الكلي</Text>
						<Text fontSize="21px" fontWeight={700}>
							140 شيكل
						</Text>
					</HStack>

					<Divider />

					<Button w={150} colorScheme="pink">
						إتمام الشراء
					</Button>
				</VStack>
			</VStack>
		</Flex>
	);
};

export default Test;
