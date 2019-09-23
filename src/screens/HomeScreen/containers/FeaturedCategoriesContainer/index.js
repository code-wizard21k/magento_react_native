import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FeaturedCategoryList from '../FeaturedCategoryList';
import { Text } from '../../../../components';
import { ThemeContext } from '../../../../config';


/**
 * Container component for featured categories
 *
 * @todo - This container is hosting another container: FeaturedCategoryList which in turn is a container in itself
 *
 * @param {Object} props - props related to the component
 * @param {Object} props.featuredCategories - (From redux) Categories need to be displayed at HomeScreen
 */
const FeaturedCategoriesContainer = ({
  featuredCategories
}) => {
  const theme = useContext(ThemeContext);
  return (
    <>
      {Object.keys(featuredCategories).map(key => (
        <View style={styles.container(theme)} key={key}>
          <Text type="subheading" bold style={styles.title(theme)}>{featuredCategories[key].title}</Text>
          <FeaturedCategoryList categoryId={parseInt(key, 10)} />
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  container: theme => ({
    marginTop: theme.spacing.sixteen,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: theme.colors.surface,
  }),
  title: theme => ({
    marginTop: theme.spacing.eight,
    marginLeft: theme.spacing.twelve,
  }),
});

FeaturedCategoriesContainer.propTypes = {
  featuredCategories: PropTypes.object.isRequired,
};

FeaturedCategoriesContainer.defaultProps = {};

const mapStateToProps = ({ home }) => {
  const { featuredCategories } = home;
  return {
    featuredCategories
  };
};

export default connect(mapStateToProps)(FeaturedCategoriesContainer);
