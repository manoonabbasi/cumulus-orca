from typing import Annotated

# noinspection PyPackageRequirements
from strawberry import type, field, argument

from src.adapters import graphql
from src.adapters.graphql import resolvers
from src.adapters.graphql.resolvers.echo import get_echo
from src.adapters.graphql.dataTypes.echo import EchoEdgeStrawberryType


@type
class Query:  # todo: Rename

    @field(
        description="""Echos the given word back as a check of basic GraphQL functionality.""")
    def getEcho(  # todo: Does this need to be cased this way?
        self,
        word: Annotated[str,
                        argument(
                            description="""The word to echo back."""
                        )
                        ] = None,
    ) -> EchoEdgeStrawberryType:
        return graphql.resolvers.echo.get_echo(word)
