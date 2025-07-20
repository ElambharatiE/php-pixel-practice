import { useState } from 'react';
import { Settings, Plus, Eye, Code, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

/**
 * Gutenberg Block Editor Simulation
 * Demonstrates understanding of WordPress FSE block structure
 */
export const BlockEditor = () => {
  const [selectedBlock, setSelectedBlock] = useState<string>('');

  const blocks = [
    {
      id: 'hero-block',
      name: 'Cover Block',
      type: 'Media',
      description: 'Hero section with background image and content overlay'
    },
    {
      id: 'heading-block',
      name: 'Heading Block',
      type: 'Text',
      description: 'Semantic heading with typography controls'
    },
    {
      id: 'query-loop',
      name: 'Query Loop',
      type: 'Theme',
      description: 'Dynamic post grid with pagination'
    },
    {
      id: 'navigation-block',
      name: 'Navigation Block',
      type: 'Theme',
      description: 'Responsive menu with mobile toggle'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-merriweather text-foreground mb-4">
            WordPress FSE Block Editor
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            This theme demonstrates Full Site Editing capabilities with custom blocks, 
            template parts, and responsive design patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Block Library */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Layers className="h-5 w-5" />
                <span>Block Library</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {blocks.map((block) => (
                <div
                  key={block.id}
                  className={`p-3 border rounded-lg cursor-pointer transition-all group ${
                    selectedBlock === block.id
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedBlock(block.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">{block.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {block.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {block.description}
                  </p>
                  <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="ghost" className="h-6 text-xs">
                      <Plus className="h-3 w-3 mr-1" />
                      Add Block
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Editor Canvas */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Code className="h-5 w-5" />
                  <span>Template Editor</span>
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-background border rounded-lg p-6 min-h-[400px]">
                {/* Simulated Block Structure */}
                <div className="space-y-4">
                  <div className={`group border-2 border-dashed rounded-lg p-4 transition-all ${
                    selectedBlock === 'hero-block' ? 'border-primary bg-primary/5' : 'border-muted'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">Cover Block</Badge>
                      <div className="block-toolbar">
                        <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                          <Settings className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded p-4 text-center">
                      <h3 className="font-semibold">Hero Section</h3>
                      <p className="text-sm text-muted-foreground">Background image with overlay content</p>
                    </div>
                  </div>

                  <div className={`group border-2 border-dashed rounded-lg p-4 transition-all ${
                    selectedBlock === 'query-loop' ? 'border-primary bg-primary/5' : 'border-muted'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">Query Loop</Badge>
                      <div className="block-toolbar">
                        <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                          <Settings className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-muted rounded p-2 text-center">
                          <div className="w-full h-16 bg-muted-foreground/20 rounded mb-2"></div>
                          <div className="text-xs">Post {i}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FSE Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Layers className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 font-merriweather">Block-Based</h3>
            <p className="text-muted-foreground font-inter">
              Built entirely with reusable blocks for maximum flexibility
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 font-merriweather">Customizable</h3>
            <p className="text-muted-foreground font-inter">
              Full visual editing with theme.json configuration
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 font-merriweather">Responsive</h3>
            <p className="text-muted-foreground font-inter">
              Mobile-first design with CSS Grid and Flexbox
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};