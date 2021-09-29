import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import TextLink from "core/ui/text-link"

const Banner = function( props ){
    const { data, loading } = props;

    return (
      <GridContainer justifyContent='center' fill style={{width: '100%'}}>
        <GridItem xs={12} sm={12} md={12}>
            <h1>People</h1>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>

        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
            <TextLink border href="/people"> See more</TextLink>
        </GridItem>
      </GridContainer>
    )
}

export default Banner;