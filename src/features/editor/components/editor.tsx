'use client';

import { useEditor } from '../hooks/useEditor/useEditor';
import { fabric } from 'fabric';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Navbar } from './navbar';
import { Sidebar } from './sidebar';
import { Toolbar } from './toolbar';
import { Footer } from './footer';
import { ShapeSidebar } from './shape-sidebar';
import { ActiveTool, SaveCallback } from '../types';
import { FillColorSidebar } from './fill-color-sidebar';
import { SELECTION_DEPENDENT_TOOLS } from '@/features/editor/constants';
import { StrokeColorSidebar } from './stroke-color-sidebar';
import { StrokeWidthSidebar } from './stroke-width-sidebar';
import { OpacitySidebar } from './opacity-sidebar';
import { TextSidebar } from './text-sidebar';
import { FontSidebar } from './font-sidebar';
import { ImageSidebar } from './image-sidebar';
import { FilterSidebar } from './filter-sidebar';
import { AiSidebar } from './ai-sidebar';
import { RemoveBgSidebar } from './remove-bg-sidebar';
import { DrawSidebar } from './draw-sidebar';
import { SettingsSidebar } from './settings-sidebar';
import { GetProjectResponseType } from '@/features/projects/api/useGetProject';
import { useUpdateProject } from '@/features/projects/api/useUpdateProject';
import { useDebouncedCallback } from 'use-debounce';
import { TemplateSidebar } from '@/features/editor/components/template-sidebar';

interface EditorProps {
  initialData: GetProjectResponseType['data'];
}

export const Editor = ({ initialData }: EditorProps) => {
  const { mutate } = useUpdateProject(initialData.id);

  const [activeTool, setActiveTool] = useState<ActiveTool>('select');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const saveChanges: SaveCallback = useCallback(
    (values) => {
      mutate(values);
    },
    [mutate],
  );

  const debounceSaveChanges = useDebouncedCallback(saveChanges, 500);

  const onClearSelection = useCallback(() => {
    if (SELECTION_DEPENDENT_TOOLS.includes(activeTool)) {
      setActiveTool('select');
    }
  }, [activeTool]);

  const { init, editor } = useEditor({
    defaultState: initialData.json,
    defaultWidth: initialData.width,
    defaultHeight: initialData.height,
    clearSelectionCallback: onClearSelection,
    saveCallback: debounceSaveChanges,
  });

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) {
      return;
    }
    const canvas = new fabric.Canvas(canvasRef.current, {
      controlsAboveOverlay: true,
      // to preserve the stacking order of objects when user selects them
      preserveObjectStacking: true,
    });
    init({
      initialCanvas: canvas,
      initialContainer: containerRef.current,
    });

    return () => {
      canvas.dispose();
    };
  }, [init]);

  const onChangeActiveTool = useCallback(
    (tool: ActiveTool) => {
      if (tool === 'draw') {
        editor?.enableDrawingMode();
      }

      if (activeTool === 'draw') {
        editor?.disableDrawingMode();
      }

      if (tool === activeTool) {
        return setActiveTool('select');
      }

      setActiveTool(tool);
    },
    [activeTool, editor],
  );

  return (
    <div className="h-full flex flex-col">
      <Navbar
        initialDataId={initialData.id}
        editor={editor}
        activeTool={activeTool}
        onChangeActiveTool={onChangeActiveTool}
      />
      <div className="absolute h-[calc(100%-theme(space.editor-navbar))] top-editor-navbar w-full flex">
        <Sidebar
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <ShapeSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <FillColorSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <StrokeColorSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <StrokeWidthSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <OpacitySidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <TextSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <FontSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <ImageSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <FilterSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <AiSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <RemoveBgSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <DrawSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <SettingsSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <TemplateSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <main className="bg-muted flex-1 overflow-auto relative flex flex-col">
          <Toolbar
            // we need to re-render the toolbar when the active object changes
            key={JSON.stringify(editor?.canvas?.getActiveObject())}
            editor={editor}
            activeTool={activeTool}
            onChangeActiveTool={onChangeActiveTool}
          />
          <div
            className="flex-1 editor-height bg-muted"
            ref={containerRef}
          >
            <canvas ref={canvasRef} />
          </div>
          <Footer editor={editor} />
        </main>
      </div>
    </div>
  );
};
