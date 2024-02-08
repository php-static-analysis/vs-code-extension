<?php

use PhpStaticAnalysis\Attributes\Returns;

#[Returns('string[]')]
function getNames(): array
{
    return ['hello'];
}
