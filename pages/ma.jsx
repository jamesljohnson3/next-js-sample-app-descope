/* eslint-disable react/no-unescaped-entities */
import {
    createStyles,
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    Heading,
    Divider
  } from '@mantine/core';
  import { IconGauge, IconUser, IconCookie } from '@tabler/icons';
  import { TextInput, Checkbox, Button, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

  const mockdata = [
    {
      title: 'Extreme performance',
      description:
        '',
      icon: IconGauge,
    },
    {
      title: 'Privacy focused',
      description:
        '',
      icon: IconUser,
    },
    {
      title: 'No third parties',
      description:
        '',
      icon: IconCookie,
    },
  ];
  
  const useStyles = createStyles((theme) => ({
    title: {
      fontSize: 34,
      fontWeight: 900,
      [theme.fn.smallerThan('sm')]: {
        fontSize: 24,
      },
    },
  
    description: {
      maxWidth: 600,
      margin: 'auto',
  
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: 45,
        height: 2,
        marginTop: theme.spacing.sm,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  
    card: {
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },
  
    cardTitle: {
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: 45,
        height: 2,
        marginTop: theme.spacing.sm,
      },
    },
  }));
  
  export default function FeaturesCards() {
    const form = useForm({
        initialValues: {
          email: '',
          termsOfService: false,
        },
    
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
      });
    const { classes, theme } = useStyles();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} p="xl">
        <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
        <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text size="sm" color="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
    return (
      <Container size="lg" py="xl">
      <Group position="center">
        <Badge variant="filled" size="lg">
          The Best Way to Earn More
        </Badge>
      </Group>
      <Title order={2} className={classes.title} align="center" mt="sm">
        Integrate Effortlessly with Any Technology Stack
      </Title>
      <Text color="dimmed" className={classes.description} align="center" mt="md">
        Looking to level up your skills? We offer tools and resources to help you buy, build, edit, sell, test, and promote your creations. 
      </Text>
    <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
    {features}
    </SimpleGrid>
    
    
    
    <Box sx={{ maxWidth: 300 }} mx="auto">
    <form onSubmit={form.onSubmit((values) => {
    fetch('https://connect.unlimitednow.site', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(response => {
      // Handle the response from the server
    })
    .catch(error => {
      // Handle any errors that occur during the fetch call
    });
})}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

        <Checkbox
          mt="md"
          label="I agree to the privacy policy"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

      <Group position="right" mt="md">
  <Button type="submit" colorScheme={{ color: "black", _hover: { color: "gray.500", bgColor: "gray.100" } }}>
    Submit
  </Button>
</Group>



      </form>
    </Box>

    <Text color="dimmed" className={classes.description} align="center" mt="md">
      Keep reading to learn all of our tips and tricks for creating content, live grind and surf online algorithm, discover a community to help create a discussion around the topic "is my idea solving a problem?", and probability.
    </Text>
  
       
      </Container>
    );
  }
